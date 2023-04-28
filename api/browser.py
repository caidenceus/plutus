from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException


class Browser(object):
    def __init__(self):
        self.driver = None
        self.service = ChromeService(ChromeDriverManager().install())
        self.options = webdriver.ChromeOptions()

        # Disable parse certificate console errors
        self.options.add_experimental_option('excludeSwitches', ['enable-logging'])

        # Headless
        # self.options.add_argument('--headless')
        # self.options.add_argument('--disable-gpu')

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
    
    def wait(self, by, locator, timeout=30):
        wait = WebDriverWait(self.driver, timeout)
        try:
            wait.until(EC.presence_of_element_located((by, locator)))
        except TimeoutException as e:
            raise RuntimeError("Unable to load landing page. " + str(e))
        finally:
            self.driver.close()
