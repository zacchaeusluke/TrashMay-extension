// based on ukitten by Tom Royal - tomroyal.com

var may = "theresa may";
// trash image data
var theTrash = {"trash": [
    {"file": "https://s20.postimg.org/w3mva5kv1/garbage_bin_976921_1920.jpg"},
    {"file": "https://s20.postimg.org/59mroo5p9/garbage_331929_1920.jpg"},
    {"file": "https://s20.postimg.org/u469iqqjh/garbage_413757_1920.jpg"},
    {"file": "https://s20.postimg.org/nrvpmncv1/garbage_511894_1920.jpg"},
    {"file": "https://s20.postimg.org/kz2i2mcil/garbage_933108_1920.jpg"},
    {"file": "https://s20.postimg.org/e9vymlr6l/garbage_1622130_1920.jpg"},
    {"file": "https://s20.postimg.org/hi0fzndgd/garbage_1715065_1920.jpg"},
    {"file": "https://s20.postimg.org/9dsbuwr19/garbage_1741138_1920.jpg"},
    {"file": "https://s20.postimg.org/mj7u10kwt/garbage_bag_850874_1920.jpg"},
    {"file": "https://s20.postimg.org/5wq9rxrz1/garbage_can_231869_1920.jpg"},
    {"file": "https://s20.postimg.org/4vq12tazh/garbage_heap_354510_1920.jpg"},
    {"file": "https://s20.postimg.org/yc5n58hct/london_346603_1920.jpg"},
    {"file": "https://s20.postimg.org/dtar063fh/maybin.jpg"},
    {"file": "https://s20.postimg.org/ohj3cr2sd/mulltonnen_594412_1920.jpg"},
    {"file": "https://s20.postimg.org/uwi49f9i5/pollution_1861133_1920.jpg"},
    {"file": "https://s20.postimg.org/jlfgl22n1/rubbish_143465_1920.jpg"},
    {"file": "https://s20.postimg.org/vbte2fvfh/trash_184994_1920.jpg"},
    {"file": "https://s20.postimg.org/6jtrv7e8t/trash_614311_1920.jpg"},
    {"file": "https://s20.postimg.org/h7xiu1o7x/trash_1694967_1920.jpg"},
    {"file": "https://s20.postimg.org/tb2uhlza5/waste_1525945_1920.jpg"}
    ]
};

function trashMay(theTrash){

	// called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with trash
	var pagepics=document.getElementsByTagName("img"), i=0, img;
	while (img = pagepics[i++])
	{
		var alttext = String(img.alt).toLowerCase();
		var imgsrc = String(img.src).toLowerCase();
    var imgclass = String(img.class).toLowerCase();

			if ((alttext.indexOf(may) != -1) || (imgsrc.indexOf(may) != -1)){
				var randk = Math.floor(Math.random() * 19) + 1
				img.src = theTrash.trash[randk].file;
        img.datasrc = img.src;
        img.height="initial"; //reset height so images aren't stretched
        img.style.height="auto";
				if (theTrash.trash[randk].type == 0){
					img.alt = 'Photo by '+theTrash.trash[randk].Credit+' source '+theTrash.trash[randk].URL+'';
				};
		};
    //if the image found is within a picture element, set all sources to trash as well
    if (img.parentNode.tagName=="PICTURE") {
      var pictureEl = img.parentNode;
      var sourceEls = pictureEl.getElementsByTagName("source"), i=0, source;
      while (source = sourceEls[i++]) {
        source.srcset = img.src;
      }
    }

  };
  //replace "Theresa May" and "Mrs May" with "Trash May"
    if (document.body.innerHTML.indexOf("Theresa May") !== -1) {
      document.body.innerHTML = document.body.innerHTML.replace(/Theresa May/g, 'Trash May');
      document.body.innerHTML = document.body.innerHTML.replace(/Mrs May/g, 'Trash May');
    }
};

// add listener
document.addEventListener('DOMContentLoaded', trashMay(theTrash), false);
