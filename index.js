const TSicon = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35.66"><defs><style>.cls-1{fill:#050038;}</style></defs><polygon class="cls-1" points="29.45 33.97 32 10.2 29.96 9.99 27.5 33.37 4.03 30.9 3.81 32.93 27.58 35.48 29.27 35.66 29.45 33.97"/><path class="cls-1" d="M28.18,2.73l-.21,2L4.5,2.25,2,25.67l-2-.21L2.55,1.69c0-.09.17-1.59.18-1.69Z"/><path class="cls-1" d="M13.2,9.23l-.21,2-4.55-.48c0-.23.19-1.8.21-2Z"/><path class="cls-1" d="M25.35,7.85l-.49,4.63-5.58-.59-1.82,17-5.29-.51.22-2,3.29.35c.47-4.35,1.36-12.69,1.83-17l5.58.6.26-2.65Z"/></svg>'

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
