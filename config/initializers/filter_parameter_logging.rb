# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

# Configure sensitive parameters which will be filtered from the log file.
Rails.application.config.filter_parameters += [
  %i[passw], %i[secret], %i[token], %i[_key], %i[crypt], %i[salt], %i[certificate], %i[otp], %i[ssn]
]
