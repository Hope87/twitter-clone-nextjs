import {Comment} from '../typings'

export const fetchComments = async (tweetId: string) => {
  const response = await fetch(`/api/getComments?tweetId=${tweetId}`);

  const comments: Comment[] = await response.json();

  return comments;
};
