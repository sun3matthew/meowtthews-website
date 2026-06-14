import { getTweet } from "react-tweet/api";
import {
  EmbeddedTweet,
  TweetNotFound,
  enrichTweet,
  type TweetProps,
} from "react-tweet";
import "./tweet.css";

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error;
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          error = onError(err);
        } else {
          console.error(err);
          error = err;
        }
      })
    : undefined;

  // Validate the tweet by running the same transform EmbeddedTweet does
  // internally. A malformed/unparseable tweet would otherwise throw during
  // render and crash the static build, escaping the catch above.
  if (tweet) {
    try {
      enrichTweet(tweet);
    } catch (err) {
      console.error(err);
      error = error || err;
    }
  }

  if (!tweet || error) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        {/* <Suspense fallback={<TweetSkeleton />}> */}
        <ReactTweet id={id} />
        {/* </Suspense> */}
      </div>
    </div>
  );
}
