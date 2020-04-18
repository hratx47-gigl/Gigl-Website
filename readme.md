# Welcome to Blue Ocean!
Congratulations and welcome to your first day at Blue Ocean! We are literally an underwater agile software development company.  

Let's begin our tour (don't blink!)...

Trello Board: https://trello.com/b/3Rj42j7O/gigl

How do you feel today? [![Build Status](https://travis-ci.com/hratx39-blue-ocean/deep-dive.svg?branch=master)](https://travis-ci.com/hratx39-blue-ocean/deep-dive)

By the end of this sprint, be sure to replace your readme and use this template as a guideline:
[Readme Template](https://github.com/hratx-blue-ocean/reading/blob/master/template-readme.md)

## Your Agile Process
Expect this project to push you outside of your comfort zone. Welcome to your first day of life as a professional developer with a professional workflow.

You will be interacting with and playing various roles consistent with an agile work enviroment. We expect you to build software meeting each of our standards over the next week.

## Minimum requirements
Work with your end user to understand what you are building

Create a backlog of tickets to work through during the week

Participate in a Sprint Planning and a Sprint Retrospective

Attend Daily Standup Meetings

Meet Acceptance Criteria determined by the user

Minimum of 60% test coverage. Tests include unit and integration tests.

Use contiuous integration and continous delivery practices

Deploy early, and often
Always have a working application in master
Create a professional quality Github repo including a Readme, Test Coverage, and Clean Code.

Atleast 50% of the tickets you worked on should be done with a pair. (Include co-authors in your commits)

We're here to help guide you through this process...and potentially throw some wrenches in as well ;)

## Get Started
The PM should clone the repo down to their machine, rimraf the .git, and the create a new repo **on this organization** and push the code up to that repo. The naming convention should follow this format: hratx##-projectname (where ## is your cohort number and projectname is the name of your project).

## Contribution Guidelines
We expect our new software engineers to start contributing to our codebase immediately. That doesn't mean we want maverick manatees swimming wild and munching on whatever looks tastiest with no concern for what other herdmates are doing. That means:
  1. No code shall be written except that which directly addresses a specific ticket.
  2. If you unexpectedly need code which falls outside the scope of your ticket, write a new ticket which requires that code.
  3. Blue Ocean is an agile workspace open to exploring any techniques which improve deliverable cycle speed. **We strongly encourage pair programming tickets with high point values.** Freeform collaboration between different teams on an as-needed basis is also encouraged.
  4. All commit messages and pull request messages shall include the number of the ticket for which the code was written. That makes tracking the meaning behind changes easier over time.
  5. If you have been working on something for several hours and you don't see an end soon in sight, double check the ticket parameters and make sure that you're still coloring within the lines. If that checks out, find a team member to talk with or work with about your ticket. Does it need to be broken into several smaller tickets? Is it too big to be worth working on at this stage of development? Are you approaching the ticket in a sane, process-driven way? Strongly consider pair programming the rest of the ticket if you check any of these boxes.
  6. Each pull request will need to pass tests on Travis CI before it can be reviewed for acceptance.

## Git Workflow
We take version control very seriously here at Blue Ocean. You will be expected to:
  1. Work on separate branches.
  2. Commit often.
  3. Write clear, concise, imperative-mood commit messages with leading ticket numbers. For example, "#21: Add list entry component".
  4. Submit pull requests when looking to merge with the master branch.
  5. **Always pull from master onto your working branch and fix conflicts before submitting a pull request to master.** 
  6. Use `git rebase` to create a linear commit history when creating a pull request. [See details here](https://www.atlassian.com/git/tutorials/merging-vs-rebasing "Merging v. Rebasing"). Additionally use squashing when you rebase to make commit history more readable.
  7. Approve pull requests only if you did not write any of the code submitted for review.
  
[More git workflow information](https://docs.google.com/document/d/1Kuvpv0rs9He9YRmbB_XVOfNKtakjioRAOjEUaGTqFtU/edit?usp=sharing)

## Codebase Overview
The deep-dive codebase is broken into two major pieces: the client and the server. The codebase has three separate package.json files and you will need to validate existing scripts and write new ones which are able to easily move between the top layer of the repo and the two lower layers to help you manage your Node packages. 

## Grading Tickets
We expect all of our software engineers to be capable of assessing the scope of a ticket and grade it on a point scale of difficulty where 1 point is small, 2 is a good size, 3 is large, 5 is huge, and anything above 5 needs to be broken into multiple tickets if possible. This will be tremendously helpful when assigning team members to tickets.

Here are some good practices for arriving at a specific grade when approaching a new topic. You do not need to be familiar with all of these techniques; pick one that works for you and matches with what the rest of your group would pick and stick to it.

### Consider the [Johari Window](https://www.communicationtheory.org/the-johari-window-model/ "Johari Window"). 
  1. If something is a known-known (you have done this thing before more than once), the process to create will be predictable and consistent. That may mean that is a smaller ticket.
  2. If something is a known-unknown (you haven't done it before but you know people who have and can consult them if you're stuck), the process to create will be predictable but inconsistent. That may mean a slightly larget ticket.
  3. If something is an unknown-known or unknown-unknown (you haven't done it before, you're not sure it can be done in the way you imagine, and no one on the team is familiar with how to do it), the creation process will be unpredictable and inconsistent. That will probably mean a larger ticket.
### Consider the breadth and depth of a given ticket. Tickets should be reasonably narrow and shallow.
  1. A broad ticket is one which touches many components.
  2. A deep ticket is one which adds a complex feature, changes many existing features, or adds many simple features within a single component.
  
[More ticketing information](https://docs.google.com/document/d/1i79WKUQuhc8nqrkZ-VHDbWCUL94H1WoIHBhV7K3Lbw8/edit?usp=sharing)


## Developer Operations
Now that you're at a real company with many people who might all need simultaneous but separate access to a single deployed instance, it's time to think about SSH operational security and how to manage multiple users through AWS. Not every member of your team will need access to either AWS credentials or to an SSH key-pair (such a broad distribution can create chaos) but you shoud avoid bottlenecking by wisely distributing access across team members.
  1. [Consult this page](https://docs.aws.amazon.com/IAM/latest/UserGuide/console.html) about setting up permissions from primary AWS account. You will need to set up Identity and Access Management on the primary account and then distribute login credentials to those members of your team who need them. **You should never share your personal credentials with anyone, including other members of your team.**
  2. For SSH access, [review this page](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html). Each team member with an SSH key will be responsible for its security and should review this article on best practices for setting up secure access from your local machine. **You should never share your personal credentials with anyone, including other members of your team.**
  3. You will use Travis CI to run tests, compare branches, and generally manage the quality of the code. [Take a look at their docs here](https://docs.travis-ci.com/user/for-beginners/).
