from setuptools import setup


setup(name='selenium_wrapper',
      version='0.1',
      description='Query Vanguard and other sites using the Selenium API',
      author='Caiden Pyle',
      author_email='caidentp@icloud.com',
      packages=['vanguard'],
      install_requires=[
          'selenium'
      ],
      zip_safe=False)