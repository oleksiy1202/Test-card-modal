
let photo_array = [
    {
        url: "https://images.unsplash.com/photo-1706473841789-56f397f3f0ae?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Фотографія з Unsplash #1"
    },
    {
        url: "https://images.unsplash.com/photo-1706479552865-c24007563e39?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "cghusbfhnxluwkcahg hakjvnclkMCDlDK:nsfvsdl k;cmlSDv knlzdfjvbnk lxdnvklf nvjkbdzhlv m/dSK /c.dfnxkvnk/m.agvs rvdhvcgjgjvskthl nsuchvtci;asio lvynrterc mjcsecdDLzx/f .nkfhg v.kn bkx.k/flm cghusbfhnxluwkcahg hakjvnclkMCDlDK:nsfvsdl k;cmlSDv knlzdfjvbnk lxdnvklf nvjkbdzhlv m/dSK /c.dfnxkvnk/m.agvs rvdhvcgjgjvskthl nsuchvtci;asio lvynrterc mjcsecdDLzx/f .nkfhg v.kn bkx.k/flm cghusbfhnxluwkcahg hakjvnclkMCDlDK:nsfvsdl k;cmlSDv knlzdfjvbnk lxdnvklf nvjkbdzhlv m/dSK /c.dfnxkvnk/m.agvs rvdhvcgjgjvskthl nsuchvtci;asio lvynrterc mjcsecdDLzx/f .nkfhg v.kn bkx.k/flm cghusbfhnxluwkcahg hakjvnclkMCDlDK:nsfvsdl k;cmlSDv knlzdfjvbnk lxdnvklf nvjkbdzhlv m/dSK /c.dfnxkvnk/m.agvs rvdhvcgjgjvskthl nsuchvtci;asio lvynrterc mjcsecdDLzx/f .nkfhg v.kn bkx.k/flm        "
    },
    {
        url: "https://images.unsplash.com/photo-1706459006208-6c7ea1a5cfe8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Фотографія з Unsplash #3"
    },
    {
        url: "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Фотографія з Unsplash #4"
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1701207573559-1f14f4f94c3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Фотографія з Unsplash #5"
    }
]
let currentIndex = 0 // Індекс поточного зображення

function displayImages(images) {
    const gallery = document.getElementById('photo_container')
    gallery.innerHTML = '' // Очищення галереї

    images.forEach((image, index) => {
        let imageContainer = document.createElement('div')
        imageContainer.className = 'photo_image_container'

        let imgElement = document.createElement('img')
        imgElement.src = image.url
        imgElement.alt = image.description
        imgElement.className = 'photo_image_element'
        imgElement.onclick = function () {
            openModal()
            currentIndex = index
            showModalImage()
        }


        let description = document.createElement('p')
        description.textContent = image.description
        description.className = 'photo_image_description'

        let editButton = document.createElement('button')
        editButton.textContent = 'Редагувати'
        editButton.className = 'photo_edit_button'
        editButton.onclick = () => editDescription(index)

        imageContainer.appendChild(imgElement)
        imageContainer.appendChild(description)
        imageContainer.appendChild(editButton)

        gallery.appendChild(imageContainer)
    })
}

function editDescription(index) {
    let currentDescription = photo_array[index].description;
    let newDescription = prompt(`Поточний опис: ${currentDescription}\nВведіть новий опис:`)

    if (newDescription) {
        photo_array[index].description = newDescription
        updateGallery()
    }
}

function updateGallery() {
    displayImages(photo_array)
}

function openModal() {
    document.getElementById('carouselModal').style.display = 'block'
}

function closeModal() {
    document.getElementById('carouselModal').style.display = 'none'
}

function showModalImage() {
    let modalImg = document.getElementById('modalImage');
    let modalDescription = document.getElementById('modalDescription');

    modalImg.src = photo_array[currentIndex].url;
    modalImg.alt = photo_array[currentIndex].description;
    modalDescription.textContent = photo_array[currentIndex].description;
}

function moveSlide(step) {
    currentIndex += step
    if (currentIndex >= photo_array.length) {
        currentIndex = 0
    } else if (currentIndex < 0) {
        currentIndex = photo_array.length - 1
    }
    showModalImage()
}

document.getElementById('closeModal').onclick = function () {
    closeModal()
}

displayImages(photo_array)
