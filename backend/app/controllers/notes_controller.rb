class NotesController < ApplicationController

  def index
    @notes = Note.all
    render :json => @notes
  end

  def create
    @note = Note.create(note_params)
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :user_id)
  end

end
