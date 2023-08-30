import { db } from './firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
// , query, where

export const getGallery = async (querySearch) => {
	try {
		if (!querySearch) return;
		const gallerySnapshot = await getDocs(collection(db, 'galleries'));
		const { docs } = gallerySnapshot;
		const documentsSnap = docs.map((doc) => doc.data());
		const querySplit = querySearch.toLowerCase().split('+');

		const everyFilteredGalleries = documentsSnap.filter((doc) => {
			const titleSplit = doc.title.toLowerCase().split(' ');
			const modelsSplit = doc.models.flat().join(' ').toLowerCase().split(' ');

			const doesIncludesTitle = querySplit.every((element) => {
				return [...titleSplit, ...modelsSplit].includes(element);
			});
			return doesIncludesTitle;
		});

		const someFilteredGalleries = documentsSnap.filter((doc) => {
			const titleSplit = doc.title.toLowerCase().split(' ');
			const doesIncludesTitle = querySplit.some((element) => {
				return titleSplit.includes(element);
			});

			const modelsSplit = doc.models.flat().join(' ').toLowerCase().split(' ');
			const doesIncludesModels = querySplit.some((element) => {
				return modelsSplit.includes(element);
			});
			return doesIncludesTitle || doesIncludesModels;
		});

		const mapEveryFilteredGallery = everyFilteredGalleries.map(
			(everyGallery) => {
				return everyGallery.id;
			}
		);
		const allSomeFilteredGalleries = someFilteredGalleries.filter((gallery) => {
			return !mapEveryFilteredGallery.includes(gallery.id);
		});

		return [...everyFilteredGalleries, ...allSomeFilteredGalleries];
		// console.log(someFilteredGalleries);
	} catch (error) {
		console.log(error.message);
	}
};

// export const getGalleryById = async (idFromURL) => {
// 	try {
// 		if (!idFromURL) return;
// 		const galleriesRef = collection(db, 'galleries');
// 		const queryGallery = query(galleriesRef, where('id', '==', idFromURL));

// 		const querySnapshot = await getDocs(queryGallery);
// 		const [docSnapshot] = querySnapshot.docs;

// 		if (docSnapshot.exists()) {
// 			console.log(docSnapshot);
// 			return docSnapshot.data();
// 		} else {
// 			console.log('No existe la galeria!');
// 		}
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// export const getGalleryById = async (idFromURL) => {
// 	try {
// 		if (!idFromURL) return;
// 		const gallerySnapshot = await getDocs(collection(db, 'galleries'));

// 		const coll = collection(db, 'galleries');
// 		const snapshot = await getCountFromServer(coll);
// 		console.log(snapshot);
// 		console.log('count: ', snapshot.data().count);

// 		const { docs } = gallerySnapshot;
// 		const documentsSnap = docs.map((doc) => doc.data());

// 		const filteredGallery = documentsSnap.filter((doc) => {
// 			return idFromURL === doc.id;
// 		});

// 		if (filteredGallery.length >= 1) {
// 			return filteredGallery[0];
// 		} else {
// 			console.log('No existe la galeria!');
// 			console.log(filteredGallery);
// 		}
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

export const getGalleryById = async (idFromURL) => {
	try {
		if (!idFromURL) return;
		const docRef = doc(db, 'galleries', idFromURL);
		const gallerySnapshot = await getDoc(docRef);

		if (gallerySnapshot.exists()) {
			return gallerySnapshot.data();
		} else {
			console.log('No existe la galeria!');
			console.log(gallerySnapshot);
		}
	} catch (error) {
		console.log(error.message);
	}
};
