from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By


class Browser(object):
    def __init__(self):
        self.driver = None
        self.service = ChromeService(ChromeDriverManager().install())
        self.options = webdriver.ChromeOptions()

        # Disable parse certificate console errors
        self.options.add_experimental_option('excludeSwitches', ['enable-logging'])

    def start(self):
        self.driver = webdriver.Chrome(
            service=self.service,
            chrome_options=self.options
        )

    def teardown(self):
        if self.driver:
            self.driver.close()

    def get(self, path):
        self.driver.get(path)

    def close(self):
        self.driver.close()

    def find_element(self, by=By.XPATH, locator=''):
        try:
            return self.driver.find_element(by, locator)
        except NoSuchElementException:
            return None
