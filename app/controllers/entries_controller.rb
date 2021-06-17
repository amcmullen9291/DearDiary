class EntriesController < ApplicationController
  before_action :set_entry, only: [ :edit, :update, :show ]

  def index
    entries = Entry.all 
    render json: EntriesSerializer.new(entries)
  end

  def new
    entry = Entry.new
    render json: EntriesSerializer.new(entry)
  end

  def create
    entry = Entry.new(entry_params)
    entry.save
    render json: EntriesSerializer.new(entry)

  end

  def edit
    render json: EntriesSerializer.new(@entry)
  end

  def update
    @entry.update(entry_params)
    render json: EntriesSerializer.new(@entry)
  end 

def show 
  render json: EntriesSerializer.new(@entry)
end


  private 
  def set_entry 
    @entry = Entry.find_by(:id => params[:id])
  end

  def entry_params
    permit(:entry).permit(:id, :title, :date, :content)
  end

end
