function copyFromSharedDriveToMyDrive() {
  const fileOrFolderId = "1KcMBZ_iT9xsu9X4zC6qGJgVBhb1WduUP";  // Place the folder ID here
  const targetFolder = DriveApp.getRootFolder();  // or specify a folder in your Drive
  var attribution_val = "Q29kZSB3cml0dGVuIGJ5IEJyeWFuIExpLg==";

  try {
    const folder = DriveApp.getFolderById(fileOrFolderId);
    copyFolder(folder, targetFolder);
    console.log("Folder copied successfully.");
  } catch (err) {
    console.log("Invalid ID or item not accessible. Error:", err.message);
  }
}

function copyFolder(sourceFolder, targetFolder) {
  // Create a new folder in the target with the same name as the source
  const newFolder = targetFolder.createFolder(sourceFolder.getName());

  // Copy each file in the folder
  const files = sourceFolder.getFiles();
  while (files.hasNext()) {
    const file = files.next();
    file.makeCopy(newFolder);
  }

  // Recursively copy each subfolder
  const subfolders = sourceFolder.getFolders();
  while (subfolders.hasNext()) {
    const subfolder = subfolders.next();
    copyFolder(subfolder, newFolder);
  }
}
