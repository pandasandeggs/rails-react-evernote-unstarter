class NotesController < ApplicationController

  def create
    @note = Note.create(note_params)
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :user_id)
  end

end
