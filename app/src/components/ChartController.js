
export const period = {
    year:["January", "February", "March", "April", "May", "June", "July", "Augusst", "September", "October", "November", "December"],
    week:["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day:["00:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00","7:00", "8:00", "9:00", "10:00", "11:00", "12:00", 
              "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"            
  ]
 }
 
export const paymentPeriod = {
  "year":[300, 50, 100, 543, 300, 50, 100, 120, 45, 120, 543, 300, 50, 100],
  "week":[50, 300, 100, 543, 300, 50, 100, 120],
  "day":[0, 50, 100, 543, 300, 50, 100, 120, 45, 120, 543, 300, 50, 100, 543, 300, 50, 100, 120, 45, 120, 543, 300, 50, 100],

}
export const data = {
  type:"bar",
};
export const options = {
  maintainAspectRatio: false,
  aspectRatio: 0.5,
  responsive:true,
  plugins: {
    legend: {
      display: false // Hide legend
    },
  },
    scales: {
      y: {
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        line: {
          display: false,
        },
        border: {
          display: false,
        },
        width:100,
      },
    },
  };

export const options1 = {
  maintainAspectRatio: false,
  aspectRatio: 0.5,
  responsive:true,
  scales: {
    x: {
      display: false, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
  elements: {
    point: {
      radius: 0, // Hide data points
    },
  }
};


