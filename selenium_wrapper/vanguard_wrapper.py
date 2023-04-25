from browser import Browser
import path
from selenium.webdriver.common.by import By

import time

class Vanguard:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.browser = Browser()
    
    def start(self):
        self.browser.start()

    def login(self):
        self.browser.get(path.LOGIN_PATH)
        username_input = self.browser.find_element(By.NAME, 'USER')
        password_input = self.browser.find_element(By.NAME, 'PASSWORD')

        username_input.send_keys('test')
        password_input.send_keys('test')
        self.browser.find_element(By.XPATH, '//button[normalize-space()="Log in"]').click()
    
    def teardown(self):
        self.browser.teardown()
