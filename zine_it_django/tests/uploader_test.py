from tests.testing_tools import SeleniumTestCase
from selenium.webdriver.common.by import By


class UploaderTest(SeleniumTestCase):
    def test_image_uploader_form(self):
        # Go to the login page
        self.driver.get(self.live_server_url + "/uploader")
        self.driver.find_element(By.LINK_TEXT, "Upload")



