import urllib.request
import json
import os

titles = ['Adwo', 'Dwennimmen', 'Odo_Nnyew_Fie_Kwan', 'Odo_nnyew_fie_kwan']

for title in titles:
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles=File:{title}.svg&prop=imageinfo&iiprop=url&format=json"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = json.loads(urllib.request.urlopen(req).read())
        pages = data['query']['pages']
        for page_id in pages:
            if 'imageinfo' in pages[page_id]:
                img_url = pages[page_id]['imageinfo'][0]['url']
                target_name = 'odo.svg' if 'odo' in title.lower() else f"{title.lower()}.svg"
                target_path = os.path.join('images', target_name)
                print(f"Downloading {title} from {img_url} to {target_path}")
                with open(target_path, 'wb') as f:
                    f.write(urllib.request.urlopen(img_url).read())
    except Exception as e:
        print(f"Failed {title}: {e}")
