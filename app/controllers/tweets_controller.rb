class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    respond_to do |format|
      if @tweet.save
        format.html
        format.js {}
      else
        format.html
      end
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
