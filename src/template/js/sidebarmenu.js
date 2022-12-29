window.addEventListener('load', evtent => {
	const sidebarnav = document.getElementById('sidebarnav');
	// console.log('sidebarnav', sidebarnav);
	if (sidebarnav) {
		sidebarnav.addEventListener('click', evt => {
			const elmA = evt.target.closest('a');

			if (!elmA) return;

			const addressValue = elmA.getAttribute('href');

			if (
				addressValue === '#' ||
				addressValue === '' ||
				addressValue === '/#' ||
				addressValue === '#/'
			)
				evt.preventDefault();

			const elmUls = Array.from(sidebarnav.querySelectorAll('ul'));
			const elmAs = Array.from(sidebarnav.querySelectorAll('a'));

			if (!elmA.classList.contains('active')) {
				let prevElem = null;
				let nextElem = elmA.nextElementSibling;

				if (!nextElem) nextElem = elmA.closest('ul');
				if (nextElem) prevElem = nextElem.previousElementSibling;

				// Remove active class on all elements ul
				elmUls.forEach(itemUl => {
					itemUl.classList.remove('in');
				});

				// Remove active class on all elements a
				elmAs.forEach(itemA => {
					itemA.classList.remove('active');
				});

				// Ul Parent
				const elmUlParent = elmA.closest('ul');
				if (elmUlParent.id !== sidebarnav.id) {
					elmUlParent.classList.add('in');

					const prevParentElem = elmUlParent.previousElementSibling;
					if (prevParentElem) {
						prevParentElem.classList.add('active');

						// Ul Granfather
						const elmGranfather = prevParentElem.closest('ul');
						if (elmGranfather.id !== sidebarnav.id) {
							elmGranfather.classList.add('in');

							const prevGranfather = elmGranfather.previousElementSibling;
							if (prevGranfather) prevGranfather.classList.add('active');
						}
					}
				}

				if (nextElem) nextElem.classList.add('in');
				if (prevElem) prevElem.classList.add('active');
				elmA.classList.add('active');
			} else if (elmA.classList.contains('active')) {
				const nextElem = elmA.nextElementSibling;

				// Ul Parent
				const elmUlParent = elmA.closest('ul');
				if (elmUlParent.id !== sidebarnav.id) {
					const prevParentElem = elmUlParent.previousElementSibling;
					if (prevParentElem) {
						// Ul Granfather
						const elmGranfather = prevParentElem.closest('ul');
						if (elmGranfather.id === sidebarnav.id) {
							if (nextElem && nextElem.classList.contains('in')) {
								// prevParentElem.classList.remove('active');
								nextElem.classList.remove('in');
							} else {
								prevParentElem.classList.remove('active');
								elmUlParent.classList.remove('in');
							}
						}
					}
				}

				elmA.classList.remove('active');
				if (nextElem) nextElem.classList.remove('in');
			}
		});
	}
});
