# 4.6.1.4 Operating systems

## Specification

### 4.6.1.4 Role of an operating system (OS)

Operating systems coordinate the operation of the computer. They are said to provide a "Virtual Machine" which hides the complexity of the hardware from the user. They deal with file saving and network operations to simplify the usage of computers.

Some of the tasks that operating systems do:

- Provides a user interface to ease interactions with the user
- Manages the CPU, by scheduling tasks and processes to allow multiple to be run at once
- Manages memory, by allocating memory and transferring programs and data between cache, RAM and primary storage (SSD/HDD)
- Manages peripherals, such as mice, keyboards and hard drives, so that they can be easily used by programs
- Organises files in a file system
- Provides security for the computer system, such as login systems
- Provides various utilities for the user, such as basic text editors and configuration programs

There are many different operating systems. Examples of these include Windows, GNU/Linux and Macintosh Operating System 10. Some GNU/Linux distributions include Ubuntu, Debian, Raspbian, and technically Android.

#### The Kernel
This is a computer program that provides many of the functions of an operating system, running at the core of the operating system. It interacts directly with the hardware and provides access to this hardware through system calls (syscalls). It is always the first program loaded on startup, and handles the rest of the computer startup as well as peripherals and memory management. It also provides data security by isolating processes and memory.

The memory manager is a part of the kernel, which allocates blocks of RAM and virtual memory, so that programs can ask for it and use it. This means that programs do not need to know where RAM is, because it is managed for them by the memory manager. This allows memory to be isolated, so that programs cannot easily see the data of others.

The kernel also manages CPU time, scheduling processes and switching between them at a very fast rate so that they can be run at the same time. It may allocate a time slice to each program for which it executes the program.

To execute a program, it must:

- Load the program from the hard drive
- Reserve a section of RAM for the program
- Copy the program code into that RAM section
- Set the CPU program counter to that memory location, and begin execution

#### Multitasking operating systems
Multitasking operating systems allow multiple tasks to be run at once. They keep track of what is open and switch between processes to execute them. They slice time between the processes, and schedule the operations of the processor. Many multi-tasking operating systems also have multiple cores, which allow the tasks to be executed in parallel. This means that these tasks can run faster, as more time can be spent on them.

Examples of these include:

- Android
- Windows
- Linux
- OS X

##### The Scheduler

The scheduler slices time between processes, which allows one processor to appear to execute several tasks simultaneously. There are many ways of slicing, prioritising and sharing this time between processes.

The scheduler ensures that:

- CPU time is used fully
- As many tasks as possible are processed in a given time
- I/O devices are used fully, and don't have to wait too long
- Jobs are prioritised correctly
- All jobs are executed properly
- There is minimal delay between input and task completion

There are many different algorithms that can be used for scheduling. Some of these include:

- Round Robin - A queue is made holding all tasks. The CPU takes tasks from the queue, and puts them to the back of the queue if they take too long.
- First Come First Served - A queue is made holding all tasks. The CPU takes tasks from the queue, and executes them to completion, in order of task assignment.
- Shortest job first - A queue is ordered with the shortest tasks first. The CPU takes tasks from the queue, and executes them to completion.
- Shortest time remaining - A queue is ordered with the shortest time remaining for tasks first. The CPU takes tasks from the queue, however if there is another task that has less time remaining, it switches to that task.
- Multi-level - Multiple queues are used, each corresponding to a particular process priority. The highest priority tasks are completed first, allowing some processes to be made more important (higher priority) than others.

#### Multi-user operating systems
These systems allow multiple users to be logged on at once. This means that you can have one powerful computer which is connected to by many "dumb" clients, that can save costs.

Multi-user operating systems share CPU time and I/O devices between users as well as processes.

Multi-user operating systems do the following:

- Give each user a workspace to store files
- Allocates resources for jobs run by users
- Logs how the system is used
- Efficiently schedules processes and tasks run by users
- Maintains security and privacy between users, so one user cannot access another's files

#### Distributed operating systems
Distributed operating systems control multiple (or many) computers to execute tasks in parallel. These compuers are organised into "clusters" which execute tasks. This means that they can execute optimised parallel tasks very quickly.

Examples of these include:

- Render farms for CGI and animated films
- Scientific research supercomputers

#### Real Time operating systems
These operating systems have a guaranteed time within which a task must be executed, called its latency. It is designed to be reliable, precise and consistent, which is useful for many urgent tasks. If two inputs arrive at the same time, it sets a priority to the processing of them, so the most important inputs are handled first.

This means it is suitable for use in:

- Factory production lines
- Space navigation computers
- Robotics
- Household appliances, e.g. washing machines
- Car engine management
- Weapon systems
- Air traffic control systems
- Telecommunications systems
- Life support systems

#### Embedded operating systems
These operating systems are embedded in other appliances, to handle a specific task on specific hardware. They need to be as efficient as possible, to reduce latency and power usage. All the software is integrated into the system, with no extra software needed to run it.

Some of these systems also run in realtime.

Embedded operating systems are used in:

- Cash machines
- Cars
- Smart TVs
- Blu-ray/DVD/CD players
- Network switches

#### Batch operating systems
Batch operating systems run processes in batches. This means that it will collect data over time, then process it all at once. It does the same task many times, to process large sets of data. These batch jobs are automatically run by the system, and do not need any human intervention. This is often done in the evening, where there is less data coming in and power is cheaper.

Batch processing is different to real time processing in that tasks are not processed immediately, but are processed in batches at a set time.

This is used for:

- Bill processing
- Admissions processing
- Order processing
- Ticket processing

#### Online operating systems
Online operating systems store their programs online as webpages, which run out of the RAM of the computer and are not stored locally. This reduces the need for storage space on computers, which makes them cheaper. This is suitable for schools, as data does not need to be stored locally. An example of this is Chrome OS.