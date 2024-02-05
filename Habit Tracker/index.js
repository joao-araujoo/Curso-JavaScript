class DiaryActivity {
  constructor(summary, emotion, activities){
    this.summary = summary;
    this.emotion = emotion;
    this.activities = activities;
  }
}

class Activity {
  constructor(name, timeSpent){
    this.name = name;
    this.timeSpent = this.#convertTimeSpent(timeSpent);
  }

  #convertTimeSpent(timeSpent) {
    const hours = +timeSpent.split("h")[0];
    const minutes = +timeSpent.split("h")[1];
    return hours * 60 + minutes;
  }
}

const myDay = new DiaryActivity("Hoje eu fiz tal tal tal...", "Feliz", [
  new Activity("School", "6h00"),
  new Activity("English", "0h15"),
  new Activity("Reading", "0h30"),
]);

const totalActivity = [
  myDay,
  // myDay,
  // myDay,
  // myDay,
  // myDay,
  // myDay,
  // myDay,
  // myDay,
  // myDay,
];

const getTimeOfActivities = () => {
  const activitiesTotalTimeSpent = {};

  totalActivity.map(diaryActivity => {
    diaryActivity.activities.forEach(activity => {
      if (activitiesTotalTimeSpent.hasOwnProperty(activity.name)){
        activitiesTotalTimeSpent[activity.name] += activity.timeSpent;
      } else {
        activitiesTotalTimeSpent[activity.name] = activity.timeSpent;
      };
    });
  });

  return activitiesTotalTimeSpent;
}

const totalTimeActivities = getTimeOfActivities();
const activitiesKeys = Object.keys(totalTimeActivities);

activitiesKeys.forEach((activity) =>
  console.log(`${activity}: ${totalTimeActivities[activity]} minutos`)
);