# Letterboxd top-movies — AWS console deploy steps

Goal: a Lambda behind an API Gateway route that, on every request, reads
your Letterboxd RSS feed and returns your highest-rated recently-logged
films as JSON. The frontend calls this endpoint directly on every page
load.

No third-party account or API key is needed anywhere in this — the RSS
feed (`letterboxd.com/<username>/rss/`) is publicly fetchable with a plain
HTTP request, unlike Letterboxd's regular pages (which return a Cloudflare
bot challenge to non-browser requests). The only reason a Lambda exists at
all is that the feed has no CORS headers, so a browser can't call it
directly — the Lambda is just a thin CORS-friendly relay.

One tradeoff worth knowing: RSS only exposes your ~50 most recent diary
entries, not your whole all-time catalog. So this shows your highest-rated
films *among what you've recently logged*, not a true all-time "top rated"
list (that page is one of the ones Cloudflare blocks, and there's no
no-signup way around it).

## 1. Create the IAM role for the Lambda

1. IAM → Roles → **Create role**.
2. Trusted entity: **AWS service** → **Lambda**.
3. Attach policy: `AWSLambdaBasicExecutionRole` (CloudWatch Logs access —
   nothing else needed, this Lambda doesn't touch any other AWS service).
4. Name it e.g. `letterboxd-top-movies-role`, create it.

## 2. Create the Lambda

1. Lambda → **Create function**.
2. Name: `letterboxd-top-movies`.
3. Runtime: **Node.js 20.x** (or latest available).
4. Permissions → **Use an existing role** → pick `letterboxd-top-movies-role`.
5. Create function.
6. In the code editor, replace the default `index.js` contents with the
   full contents of
   [`letterboxd-favorites-lambda.js`](../src/javascript/letterboxd-favorites-lambda.js)
   from the repo. Click **Deploy**.
7. **Configuration** tab → **Environment variables** → add:
   - `LETTERBOXD_USERNAME` = `nithilareddy`
   - (optional) `MOVIE_COUNT` = `8`
8. Default timeout (3s) and memory (128 MB) are plenty here — it's a plain
   HTTP fetch + regex parse, no rendering involved.

## 3. Add the API Gateway trigger

1. Still in the Lambda → **Add trigger** → **API Gateway**.
2. Create a new API → type **HTTP API**.
3. Security: **Open** (no auth — it's a public read-only endpoint).
4. Add trigger.
5. Open the new API in the API Gateway console → **CORS** → configure:
   - Access-Control-Allow-Origin: `*` (or your real domain once it's live)
   - Access-Control-Allow-Methods: `GET`
   Save.
6. Note the **Invoke URL** shown on the trigger — that's your endpoint
   (something like
   `https://abc123xyz.execute-api.us-east-1.amazonaws.com/default/letterboxd-top-movies`).

## 4. Test it

Open the Invoke URL directly in a browser. You should get back JSON like
`{"movies":[{"title":"...", "url":"...", "poster":"...", "rating":4.5}, ...]}`.

If `movies` comes back empty, check CloudWatch Logs for this Lambda —
most likely Letterboxd's RSS format has changed (unlikely but possible;
see below), or none of your recent diary entries have a star rating
attached (unrated logs are skipped).

## 5. Wire up the frontend

1. In `src/javascript/fun.js`, replace the `TOP_MOVIES_ENDPOINT` placeholder
   with the real Invoke URL from step 3.
2. Rebuild/redeploy the site.

## If parsing breaks later

RSS is a much more stable format than Letterboxd's HTML, but if the
endpoint ever starts returning an empty list, fetch
`https://letterboxd.com/nithilareddy/rss/` directly in a browser (it's
just XML) and compare its `<item>` structure against the parsing logic in
the Lambda to see what changed.
