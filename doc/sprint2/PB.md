# Product Backlog

Trello Invite: https://trello.com/invite/b/RwdqWLOQ/ATTI5e52efad3543012c3670073555f50d9fFA228C4D/utsc-clubhouse

### High:

1. As a student, I want to register so that I can securely manage and use my individualized account.
* COS:
    * Make sure a student can register using my UOFT email
    * Make sure emails other than UOFT ones cannot register/login
    * Make sure once registered, the student is able to sign in using their credentials that they used to register

2. As a student, I want to login so that I can securely manage and use my individualized account
* COS: 
    * Login and store authenticated user in a cookie
    * Make sure password and username match database
    * Logging in as a club will send you to the club-side home page

3. As a student, I want to browse through a list of existing clubs so that I can see all the clubs at UTSC. 
* COS:
    * Make sure every student can see a list of clubs, and browse through them

4. As a student, I want to filter clubs/events by categories so that I can view clubs/events relevant to me.
* COS:
    * Clubs are sorted by the user’s “areas of interest” by default
    * Clubs can be filtered and sorted by categories that the clubs put themselves into
    * Students can choose the specific category they want to browse

5. As a club admin, I want to add tags to my club/events so that it’s easier for students to discover our events. 
* COS:
    * Make sure club admins can add/modify tags to the club profile/posted events
    * Make sure clubs/events with a specific tag show up in the results when searching for that tag

6. As a student, I want to browse through upcoming club events so that I can register/attend events I’m interested in.
* COS:
    * Make sure every student can see and register for any of the upcoming events.
    * Students are able to explore new events by browsing through the list of upcoming events.
    * Events hosted by clubs can also be filtered by the category of the club itself

7. As a student, I want to join/apply to clubs so that I can become a general club member.
* COS:
    * Make sure every student can apply to any of the clubs on the clubs profile page.
    * Once accepted, the student must receive all notifications related to that club.

8. As a club admin, I want to make announcements so that I can notify members/followers of upcoming events/club updates.
* COS:
    * Make sure club admins can post information about the club/upcoming events which send notifications to the joined/following members

9. As a club admin, I want to create events so that students find out about it.
* COS:
    * Make sure a club admin is able to create an event
    * Make sure events are displayed under upcoming events

10. As a club admin, I want to add/modify/display profile details so that students can learn about the club and view contact details.
* COS:
    * Make sure club admins edit the information that is shown to the students about the club
    * Students can get a general overview about the club
    * Make sure events are displayed under a club's profile

### Mid:

11. As a student, I want to apply to club executive positions at the specific club so that I can become an executive.
* COS:
    * Make sure students can see all the job postings at each specific club page they visit
    * Students can apply for these job postings through the specified process by the club

12. As a club admin, I want to see the members of my club so I can manage and prepare for events accordingly.
* COS:
    * Make sure a list of current members of the club is shown to the club admin

13. As a club admin, I want to approve/deny club register requests so I can select the qualified members to join the club.
* COS:
    * Students that apply to the clubs appear to the club admin where they can decide to let them join or deny their request

14. As a club admin, I want to post executive positions descriptions so that I can receive/review applications.
* COS:
    * Make sure club admins can review all the applications for posting
    * Make sure all students can see the available hiring ads.
    * Easily able to choose qualified members for posting in an orderly fashion. (Tentative, can also just leave it to email).

15. As a club admin, I want to be able to request to register a club so I can have a club account.
* COS:
    * Club admins can submit a request to form a new club once they register

16. As a student, I want to see a list of clubs I'm following/a member of so I can keep track of them.
* COS:
    * Students are able to view their followed/joined clubs so they can make the necessary modifications they desire
        * I.e. unfollow, change notifications preferences, check out a specific club event, etc

### Low:

17. As a student, I should be able to choose if I want email notifications as well so that I have another method to be instantly notified when a notification is sent.
* COS:
    * Make sure I can choose whether I want to notifications in my email
    * Emails are sent at the same time as the notification arrives in the inbox.

18. As a student, I want to be able to contact the club so I can inquire about the club itself or an event hosted by the club.
* COS:
    * Students can ask any questions and directly communicate with the club using the contact information on each club's page.
    * Make sure that the contact information is valid and up to date.

19. As a student, I want to follow clubs so that I get notifications (email and/or inbox) for announcements/events as wanted.
* COS:
    * Make sure notifications sent by any of the clubs that are followed/joined are received by the student.

20. As a student, I want to unfollow/leave clubs so I can no longer be getting their notifications.
* COS:
    * Make sure once a student has unjoined/unfollowed, they don't receive notifications from them.

21. As a club admin, I want to remove members so that members who are kicked off or quit the club no longer get the notifications sent to the current members.
* COS:
    * Make sure club admins can manually remove members from their club
    * Students may get removed from club for various reasons(inappropriate behaviour, absence, transfer, etc) which means they no longer should get the notifications

22. As a system admin, I want to approve/deny club registration requests so that approved clubs can be added to the website.
* COS:
    * They must be approved by the system admin before they can proceed to form a club
    * If denied, the individual who sent the request receives a rejection email
    * If accepted, they are provided with the credentials they can use to sign in as a club admin.

23. As a system admin, I want to remove clubs so that students cannot see clubs that no longer exist.
* COS:
    * Make sure clubs that are deleted by the system admin are no longer seen by students, thus they can no long join it
    * The club admin of that club cannot no longer sign into their club account
    * All students in that club are removed from the club


24. As a student, I want to be able to register for events so that I can attend events I'm interested in
* COS:
    * Make sure when a logged in student joins an event, they are displayed in the list of attendees
    * Join button should change to Joined after joining
    * If button clicked again, should change to Join and remove them from the list

25. As a club admin, I want to login so that I can manage my club
* COS:
    * One must be approved by the system admin before being able to login as a club
    * The club admin account will be associated with the specified email by the system admin
    * Logging in as a club will send you to the club-side home page
