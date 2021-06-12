class EntriesSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :title, :content
end
