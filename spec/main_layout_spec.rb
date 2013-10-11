require 'rspec'
require 'capybara'
require 'capybara/dsl'
require 'capybara/rspec'
require 'spec_helper.rb'
require 'capybara/poltergeist'
require 'pry'
Capybara.default_driver = :poltergeist
Capybara.app_host = "http://localhost"


describe "The basic layout" do
	it "has 3 elements" do
		visit "/"
		find('#signal').click
		sleep(1)	
		all('ul#feeds li').size.should eq(3)
	end
end

describe "The button in the list should has the google link" do
	it "should has the right link" do
		visit "/"
		find('#signal').click # should comment here
		sleep(1)
		all('ul#feeds li a').each do |element|
			element[:href].should match(/^comgooglemaps:\/\//)
		end

	end
end

describe "The broswer dectector" do
	it "should have the warning it's not iphone" do
		page.driver.headers = {"User-Agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.54.1 (KHTML, like Gecko) Version/7.0 Safari/537.54.1"}
		visit '/'
		find(".warning").should be_true
	end

	it "should not have the warning" do
		page.driver.headers = {"User-Agent" => "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A4449d Safari/9537.53"}
		visit '/'
		page.should have_no_css(".warning")
	end
end

describe "The the iphone4 startup image" do
	it "should exist" do
		visit '/'
		#page.source.should have_selector('title', text:"MapSwitcher")
		#page.source.should match(/<link/)
		page.source.lines do |line|
			if (line =~ /^\s*<link/)
				line.should match(/568px/)
			end
		end
	end
end
describe "Show Banner button" do
	it "show show a warning banner" do
		visit '/'
		find('#signal').click
		find('.warning.test').text.should eq('this is a test')
	end
end

# describe "The Nginx sub domain reverse function" do
# 	it"should get the main page" do
# 	end
# end

describe "web socket push" do
	it "should add a new link when the mocked ajax request send to json server" do
		visit '/'
		pre_count = all('ul#feeds li').size
		find('#mock-websocket').click
		sleep(1)
		all('ul#feeds li').size.should eq(pre_count + 1)
	end
end

# describe "delete button" do
# 	it "should delete the current li element" do
# 		visit '/'
# 
# 	end
# end
