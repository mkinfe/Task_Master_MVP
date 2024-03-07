
Taskmaster
Mahlet Kinfe Mersha's TaskMaster

Description
An MVP Task Management App for Android.

Daily Change Log

Implemented Homepage, Add a Task, and All Tasks Activities.
Configured layout of all three Activities.
Enabled button-based navigation and retained back-button functionality.
Added styling.

Implemented TaskModel to carry data.
Added RecyclerView on AllTasks Activity.
Added Spinner element to show hard-coded tasks in a list.
Set up Room.
Refactored RecyclerView.
Modified AddTask to utilize local DB.
Set up Details Page to show Task Description and Title.

Completed Room DB integration.
Updated style and added a background.
Added 4 new Espresso Tests.
Added unittests.
Fixed back-button functionality.
Added ability to destroy certain Activities after work is completed using built-in 'finish()' method.

Removed references to Room and previous Entity and Model "TaskModel".
Created a Task Resource using AWS Amplify CLI.
Refactored DB references to use AWS Amplify data instead of Room.
Modified Add Task Activity to save Task Data to DynamoDB.
Refactored HomeActivity RecyclerView to display DynamoDB entries.
Encapsulated Activities with entry-point Class "TaskMasterApplication".
Espresso Tests were not changed, and still operate.
Added screenshots of progress to this readme.

