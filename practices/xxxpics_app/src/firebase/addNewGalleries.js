import { db } from './firebaseConfig';
import { collection, getDocs, doc, writeBatch } from 'firebase/firestore';

export const addNewGalleries = async (data) => {
	try {
		const { results } = data;
		const batch = writeBatch(db);

		const querySnapshot = await getDocs(collection(db, 'galleries'));
		const { docs } = querySnapshot;
		const snapshotDocumentsTitle = docs.map((doc) => doc.data().title);
		const snapshotDocumentsId = docs.map((doc) => doc.data().id);

		const filteredGalleries = results.filter(
			(gallery) =>
				!snapshotDocumentsTitle.includes(gallery.title) &&
				!snapshotDocumentsId.includes(gallery.id)
		);

		filteredGalleries.forEach((gallery) => {
			const galleryRef = doc(db, 'galleries', gallery.id);
			batch.set(galleryRef, gallery);
		});

		if (batch._mutations.length) await batch.commit();
	} catch (error) {
		console.log(error.message);
	}
};
