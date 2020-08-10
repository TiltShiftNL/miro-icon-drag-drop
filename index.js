const TSicon = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#050038;}</style></defs><polygon class="cls-1" points="20.83 6.52 19.23 21.8 3.9 20.18 3.69 22.15 20.95 24 22.8 6.74 20.83 6.52"/><path class="cls-1" d="M20.11,3.79l.2-1.94L3.05,0,3,.56c0,.32-.09.83-.1.86L1.2,17.27l2,.2L4.77,2.18Z"/><path class="cls-1" d="M10.54,8.44l.19-1.74L7.47,6.36l0,.28c0,.11-.11,1-.12,1.17l0,.29.88.09,2.09.22Z"/><polygon class="cls-1" points="14.25 8.84 17.54 9.19 17.89 5.89 16.13 5.71 15.97 7.26 12.69 6.91 11.61 16.94 9.67 16.73 9.48 18.51 13.17 18.87 14.25 8.84"/></svg>'

function run() {
	miro.initialize({
		extensionPoints: {
			bottomBar: {
				title: 'TiltShift Icons',
				svgIcon: TSicon,
				onClick: () => {
					miro.board.ui.openLibrary('content.html', {title: 'TiltShift Icons'})
				}
			},
			getWidgetMenuItems: (widgets) => {
				return Promise.resolve({
					tooltip: 'Hi',
					svgIcon: TSicon,
					onClick: (widgets) => {
						console.log('onClick', widgets)
					}
				})
			}
		}
	})
}

miro.onReady(run)
