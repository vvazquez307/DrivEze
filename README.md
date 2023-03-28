# Boilerplate

Commands to add this boilerplate to your own github repository:
- Clone this repository
- Navigate into the project and open it in VScode
- Navigate to your GitHub page and create a new repository called "boilerplate"
- Copy the SSH from the top of the GitHub page, it will look similar to this: git@github.com:studentName/boilerplate.git
- Navigate back to your open VScode and confirm that your terminal is at the correct location, which should be inside of the cloned repo
- In your terminal type in `git remote -v` - you should see something similar to this: `origin git@github.com:laurxnemeth/boilerplate.git (fetch)`
- Next, we are going to switch the origin from my GitHub to your own GitHub by running the following command in your terminal:
- `git remote set-url origin (paste the SSH that we copied in step 4)`
  ex: git remote set-url origin git@github.com:studentName/boilerplate.git
- Since we have updated the origin of the code to be the GitHub repo that we created on our personal accounts. We now want to push the code up to GitHub with the `git push` command. (if you refresh your GitHub, you should now see the starter code in the GitHub repo that you just created)

How to turn that repo into a template:
- Go into the settings of your `boilerplate` github repository
- In `General`, right under your `Repository Name`, click the box that says `Template repository `
- Now, whenever you want to base your new repository on the boilerplate's starting point, you can navigate to the repository and choose to "Use this template"
