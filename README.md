# ferroMenu-amd
A modified ferroMenu jquery plugin based on Alessandro Ferrini beautiful ferroMenu plugin.

http://www.alessandroferrini.it/lab/jQueryPlugins/ferroMenu/

NOTICES

According to the Apache 2.0 License

Modifications to the ferroMenu application include:
	adding a amd function wrapper with necessary jquery dependencies.
	adding relative menu locations according to nav parent's location, height and width
	modifies dom directly by removing then appending nav with nav items to ferroMenu anchor as children
	specific changes are detailed in the git deltas

## Example


`$("#nav").ferroMenu({
    position    : "left-top",
    delay       : 50,
    rotation    : 720,
    margin      : 20,
    relative: true
});`

Above will create a ferroMenu from the passed in ul with child li's as menu items:
* `relative` option will calculate the 9 ferroMenu anchor points according to the `# nav` ul's container or parentNode
* on menu drag, ferroMenu will snap to closest relative anchor point
* `relative` false, or `relative` option not supplied will allow for original plugin's behaviour, snapping to window anchor points