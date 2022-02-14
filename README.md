![](https://lh3.googleusercontent.com/wfK_Af14_mSpx1M3xP3xKpZ2X4Ov8Iml_WKWAM_zma73Knsxx8IN5BMFyHL2D6nCcPkTEHOwNma9bV16xaqWA_xixtE=w128-h128-e365-rj-sc0x00ffffff)

# Open modules

https://user-images.githubusercontent.com/23069445/153749986-6a9cb785-5fb7-42ab-8ab1-43b336f236ae.mov

OpenShift docs repository uses symlinks for the `modules` folder.
Therefore, when you include modules in your assemblies files, you only have to use `module/<file-name>.adoc` instead of the entire path. However, GitHub's default AsciiDoc preview does not honor the symlinks. As a result, when you click the link for modules in GitHub, it shows a 404 error.

When you open any assemblies, this add-on goes through all the included module links and updates the addresses to point to the correct file address for that module.

To use it:
1. Open the assembly file in GitHub.
1. Refresh the page.
1. Links for all modules will update and show a green underline.
1. Click on the updated links to open the modules directly in GitHub.

### Google Chrome extension
[![Available in the Chrome Web Store](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/mPGKYBIR2uCP0ApchDXE.png)](https://chrome.google.com/webstore/detail/open-modules/lgffboghpdhgjflldjiiemnangpomfpp)


### Firefox Add-on
[![Available in the Firefox Add-ons](https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/addons/files/2015/11/get-the-addon.png)](https://addons.mozilla.org/en-US/firefox/addon/open-modules/)
