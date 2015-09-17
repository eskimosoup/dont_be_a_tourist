MissingSourceFile::REGEXPS << [/^cannot load such file -- (.+)$/i, 1]


module CustomRescue
  def local_request?
    return false if Rails.env.production? || Rails.env.staging?
    super
  end
end

ActionController::Base.class_eval do
  include CustomRescue
end

