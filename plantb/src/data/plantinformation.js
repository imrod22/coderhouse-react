import plants from './plant.json'

export const getAllPlants = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(plants)
        }, 4000)
    })
}

export const getPlantsByCategory = (category) => {
    const plantsfiltered = plants.filter(p => p.category.includes(category) )

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(plantsfiltered)
        }, 2000)
    })
}

export const getPlantDetail = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const plant = plants.find(p => p.id === id)
            resolve(plant)
        }, 3000)
    })
}