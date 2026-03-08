- steps:
  [x] git cc -> starts app
  [x] type -> feat/chore/style etc
  [x] emoji -> keep it short (limit to 5 - 10)
  [x] short descripton
  [x] happy? y/n
  [x] transform res into a string that matches a format & prints for user to see: `type(emoji): description`
  - sends transformed string as message inside `git commit -m ""`

- edge cases:
  - ablility to go back?
  - cancel git cc entirely
  - error if no stacked changes!
