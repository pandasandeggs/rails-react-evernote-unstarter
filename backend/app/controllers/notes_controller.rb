class NotesController < ApplicationController

  def index
    @notes = current_user.notes
    render :json => @notes
  end

  def find
    @notes = current_user.notes
    notes = @notes.select{|note| note.title.include?(params[:search_term]) || note.body.include?(params[:search_term])}
    render :json => notes
  end

  def create
    @note = Note.new(note_params)
    @note.user = current_user
    @note.save
    render :json => @note
  end

  def update
    @note = Note.find(params[:id])
    @note.user = current_user
    @note.update(note_params)
    @note.save
    render :json => @note
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    head :no_content
  end

  private
  def note_params
    params.require(:note).permit(:title, :body)
  end

end
