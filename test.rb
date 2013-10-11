require 'test/unit'
require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'
require 'pry'

class MyAppTest < Test::Unit::TestCase
	include Capybara::DSL
	Capybara.default_driver = :poltergeist
	Capybara.app_host = "http://localhost"
	def test_first_test_example
		visit "/"
		find('#signal').click
		sleep(1)
		assert_equal all('ul#feeds li').size, 3
	end
	def test_mock_websocket_add_new_element
		visit "/"
		find('#signal').click
		sleep(1)
		original_size = all('ul#feeds li').size
		find("#mock-websocket").click
		sleep(1)
		assert_equal original_size + 1, all('ul#feeds li').size
	end

	def test_delete_button
		visit "/"
		find('#signal').click
		sleep(1)
		original_size = all('ul#feeds li').size
		find('ul#feeds li:nth-child(2) button').click
		assert_equal original_size - 1, all('ul#feeds li').size

	end

	def test_websocket_add_new_element
		visit '/'
		original_size = all('ul#feeds li').size
		find('#socket-server-signal').click
		assert_equal original_size + 1, all('ul#feeds li').size
		
	end

end
