from bs4 import BeautifulSoup
import pandas as pd
import requests
import sys
sys.path.append(r"d:\git\spellit\data_scrape\lib\site-packages")

URL = "https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

li = soup.find_all("p")
x = li[-1]

l = str(x).split("<br/>")
l[0] = l[0].replace("<p>", "")
l[-1] = l[-1].replace("</p>", "")

df = pd.DataFrame({'word': l})
df.to_csv("word3000.csv", index=False)
