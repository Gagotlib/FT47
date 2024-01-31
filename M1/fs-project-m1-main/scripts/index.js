class Activity { 
    constructor({ id, title, description, imgUrl }) {
        console.log(id)
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl =imgUrl
    }
}

class Repository {
    constructor() {
        this.activities = []
        this.id = 0
    }
    getAllActivities() {
        return this.activities
    }
    createActivity(object) {
        this.id ++
        const activity = new Activity({ id: this.id, ...object })
        
        this.activities.push(activity)
    }
    deleteActivity(id) { 
        const filtered = this.activities.filter(act => act.id !== id)
        this.activities = filtered
    }
}

const repository = new Repository()

const obj = {
  title: "Activity 1",
  description: "Description 1",
  imgUrl: "https://via.placeholder.com/150",
};
console.log(repository)
repository.createActivity(obj)
console.log(repository);
repository.createActivity(obj);
console.log(repository);
repository.createActivity(obj);
console.log(repository);
repository.createActivity(obj);
console.log(repository.getAllActivities())
repository.deleteActivity(2)
repository.deleteActivity(3)
repository.deleteActivity(4)
repository.deleteActivity(1);
console.log(repository.getAllActivities());
