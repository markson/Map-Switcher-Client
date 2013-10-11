require 'test/unit'

class AppRelease1 < Test::Unit::TestCase
	def test_client_get_email_content
		puts "Does the email content shown in the web client(y/n)?"
		result = gets.chomp
		assert_equal(result, 'y')
	end
end
