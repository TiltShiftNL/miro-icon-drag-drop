const TSicon = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35.66"><defs><style>.cls-1{fill:#050038;}</style></defs><polygon class="cls-1" points="28.18 2.73 28 4.42 26.98 4.31 4.24 1.87 1.69 25.64 0 25.46 2.55 1.69 2.56 1.58 2.73 0 4.42 0.18 17.44 1.58 26.98 2.6 28.18 2.73"/><polygon class="cls-1" points="29.45 33.97 32 10.21 30.31 10.02 27.76 33.79 4 31.24 3.81 32.93 27.58 35.48 29.27 35.66 29.45 33.97"/><polygon class="cls-1" points="13.6 8.95 13.49 9.96 12.82 9.89 12.78 9.88 9.92 9.58 9.99 8.87 10.02 8.67 10.03 8.56 10.99 8.67 12.77 8.86 13.6 8.95"/><polygon class="cls-1" points="22.7 8.32 22.42 10.92 17.84 10.43 16.01 27.45 12.68 27.09 12.79 26.07 15.11 26.32 15.14 25.98 15.16 25.76 16.16 16.53 16.17 16.41 16.93 9.3 21.52 9.8 21.69 8.21 22.7 8.32"/></svg>'

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
