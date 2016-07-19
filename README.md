# recipeasy
Create E-Recipe books for food bloggers

## Run Server
```middleman server```

## Deploy Changes
1. Merge any changes to Master
2. From Master run ```be rake publish```
3. Boom! You're done! Changes will be live in a couple minutes.

## Troubleshooting Deployment
1. Delete `build` folder. If you have run ``be rake publish`` and it fails, there may be a duplicate folder in folder tree. Make sure to delete.
2. Try deleting you local version of branch `gh-pages`. ```git branch -d gh-pages```

