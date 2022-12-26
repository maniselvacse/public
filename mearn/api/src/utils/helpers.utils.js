import { readdir, unlink } from 'fs';

export default class Helpers {
    static deleteAllFiles(folder) {
        readdir(folder, (err, files) => {
            if (err) throw err;

            for (const file of files) {
                unlink(folder + file);
            }
        });
    }
}