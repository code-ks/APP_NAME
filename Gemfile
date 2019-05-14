source 'https://rubygems.org'
ruby '2.5.3'

gem 'bootsnap', require: false
gem 'devise'
gem 'jbuilder', '~> 2.0'
gem 'pg', '~> 0.21'
gem 'puma'
gem 'rails', '5.2.3'
gem 'redis'

gem 'autoprefixer-rails'
gem 'font-awesome-sass', '~> 5.6.1'
gem 'sassc-rails'
gem 'simple_form'
gem 'uglifier'
gem 'webpacker'
# Obfuscates form HTML so that bots submit spam to invisible fields
gem 'invisible_captcha'
# I18n Rails and Devise support
gem 'devise-i18n'
gem 'rails-i18n'
gem 'cloudinary', '~> 1.9.1'

group :development do
  gem 'web-console', '>= 3.3.0'
  # Mimicks emails in the dev environment
  gem 'letter_opener'
  # Warns of N+1 queries
  gem 'bullet'
  # Appends the database schema to models
  gem 'annotate'
  gem 'rubocop'
  gem 'rubocop-performance'
  # Creates a PDF with the visual database layout
  gem 'rails-erd'
  # Security vulnerability scanner
  gem 'brakeman'
  # Git hook manager
  gem 'overcommit'
  # Better error page for Rails apps
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :development, :test do
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'dotenv-rails'
  # Required for testing purposes
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'launchy'
  # Keeps Selenium drivers up to date automatically
  gem 'webdrivers', '~> 3.0'
end

group :test do
  # Provides a GUI for test coverage
  gem 'simplecov', require: false
end
