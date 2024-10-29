from functional_tests.testing_tools import SeleniumTestCase

class AuthenticationFormTest(SeleniumTestCase):
    def test_authentication_form(self):
        # Go to the login page
        self.driver.get(self.live_server_url)

