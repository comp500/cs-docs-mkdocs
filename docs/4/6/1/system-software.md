# 4.6.1.3 System software

## Specification

### 4.6.1.3 System software
System software does several tasks required for operation of a computer, and perform secondary tasks seperate from applications on a computer.

#### Operating Systems
An operating system is a key part of system software. All computers have an operating system, and cannot function without one. They allow application software to communicate with hardware. They have many tasks, not limited to:

- Sorting out where to store data on disk drives.
- Dealing with security, such as usernames and passwords for logins.
- Organising files and folders.
- Managing data transger from the CPU to peripherals such as printers and monitors.
- Deals with saving, deleting, opening and closing files.

Examples of major operating systems include Microsoft Windows, Apple macOS and Canonical Ubuntu.

#### Utility programs

Utility programs are designed to do a single or possibly a few specific tasks. They are often small programs in terms of programming code as they are tailored to do a specific job. Operating systems generally have lots of utilities integrated into them, such as:

- Taking backups of disk drives, whether that be full backups at once or incremental backups over time.
- Disk cleaners that free up space on disk drives by deleting files that are no longer used or necessary.
- Defragmenting hard disks or TRIM for solid state drives to free up gaps in drives when files have been deleted.
- File compression to reduce file sizes, can be lossless or lossy.
- Disk formatting to ensure the operating system can use the disk drive.
- Testing memory performance.
- Network configuration and performance.

There are multiple types of security utilities also built into operating systems, including:

- User accounts
- Anti-virus software to prevent, detect and remove malicious software.
- Firewalls that filter between trusted and untrusted networks and prevent programs from communicating through the use of ports.
- Encryption of data so it becomes unreadable unless you have a specific key to decrypt it.

Utilities are also available from third party suppliers that can be installed onto a system.

#### Libraries

Libraries are a collection of ready-made subroutines that can be called by programs executing within the host operating system. For example, someone programming within Windows can call 'Dynamic Link Libraries (DLL)'. These DLLs contain common routines that can carry out common tasks within the Windows environment.

A utility called a **loader** loads the subroutne into memory, and then another utility called a **linker** links the code into the relevant part of the main program.

| Pros | Cons |
| --- | --- |
| There is no need to write some procedures from scratch, saving time when coding. | The library has to be well-written and robust or it will impair all applications making use of it. |
| Because the procedures have already been tested, they are unlikely to contain bugs. | Specialist libraries for engineering, science and finance can be very expensive. |
| The application itself can remain small and compact. | For run-time loading the library has to be present. |
| They allow code to be shared with other applications that make use of the same procedure. ||
| An external library procedure can be updated without needing to re-compile the whole application. ||
| Library functions can be written in the most efficient language for the procedure needed. ||
| Library routines are connected to the program using a linker. ||
| The addresses of library routines are handled by the loader when the program is run. ||
