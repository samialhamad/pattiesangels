SELECT name, Photo_ID, Testimonial_ID, Author, Content, Date, Image, Testimonials.Animal_ID from Animals
INNER JOIN AnimalPhotos
ON Animals.Animal_ID = AnimalPhotos.Animal_ID
INNER JOIN Testimonials
ON Testimonials.Animal_ID = Animals.Animal_ID
WHERE isAdopted = 'Y';