from integration_tests.testing_tools import SeleniumTestCase
from selenium.webdriver.common.by import By
from uploader.models import Zine
from selenium.webdriver.support.ui import Select

# TODO: Move this testing logic in to a Jest spec.

class UploaderTest(SeleniumTestCase):
    def test_image_uploader_form(self):
        return
        Zine(name="Test Zine").save()
        self.driver.get(self.live_server_url + "/uploader/pages")
        self.driver.find_element(By.LINK_TEXT, "Create a new page").click()
        self.driver.find_element(By.ID, "id_index").send_keys("1")

        upload_button = self.driver.find_element(By.XPATH, "/html/body/form/input[2]")
        zine_dropdown = self.driver.find_element(By.ID, "id_zine")
        select = Select(zine_dropdown)

        select.select_by_visible_text("Test Zine")
        upload_button.click()
        self.assertTrue("Page Index" in self.driver.page_source)
        self.assertTrue("Zine: Test" in self.driver.page_source)
        self.assertTrue("Index: 1" in self.driver.page_source)
