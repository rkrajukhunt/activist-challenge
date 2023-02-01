# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket 1: Add custom Agent id field to database**
- Acceptance Criteria:
	- A new field named "custom_id" should be added to the "Agents" table in the database.
	- The "custom_id" field should be able to store alphanumeric values and should have a maximum length of 50 characters.
	- The custom id should be unique for each Agent within a Facility.
- Time/Effort Estimate: 2 hours
- Implementation Details:
	- Update the database schema to add the "custom_id" field to the "Agents" table.
	- Implement a unique constraint on the "custom_id" field within the context of a Facility.

**Ticket 2: Modify getShiftsByFacility function**
- Acceptance Criteria:
	- The "getShiftsByFacility" function should now return the custom id for each Agent, along with the internal id.
- Time/Effort Estimate: 1 hour
- Implementation Details:
	- Modify the SQL query used by the "getShiftsByFacility" function to also select the "custom_id" field from the "Agents" table.
	- Ensure that the custom id is included in the metadata returned by the function.

**Ticket 3: Modify generateReport function**
- Acceptance Criteria:
	- The "generateReport" function should now use the custom id instead of the internal id when generating the report.
- Time/Effort Estimate: 2 hours
- Implementation Details:
	- Modify the "generateReport" function to use the custom id instead of the internal id when generating the report.
	- Update the PDF template used by the "generateReport" function to include the custom id.

**Ticket 4: Test and Deploy Changes**
- Acceptance Criteria:
	- All changes should be thoroughly tested and should not introduce any bugs.
	- The new feature should be deployed to the production environment.
- Time/Effort Estimate: 4 hours
- Implementation Details:
	- Write test cases to verify that the custom id is correctly used in the report.
	- Test the new feature in a development environment.
	- Deploy the changes to the production environment.


 
