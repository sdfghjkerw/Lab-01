import React, { useState } from 'react';
import type { User } from "./types";
import UserCard from "./UserCard";

const INITIAL_DATA: User[] = [
    { name: "Alice", email: "alice@mail.com", age: 25 },
    { name: "Bob", email: "bob@mail.com", age: 30 },
    { name: "valeria", email: "leria@mail.com", age: 19 },
    { name: "elina", email: "elino@mail.com", age: 19 },
    { name: "fisa", email: "fisa@mail.com", age: 9 }
];

const UserSearch = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        setFilteredUsers(
            users.filter((u) =>
                u.name.toLowerCase().includes(term.toLowerCase())
            )
        );
    };

    const handleClear = () => {
        setSearchTerm("");
        setFilteredUsers(users);
    };

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search..."
            />
            <button onClick={handleClear}>Clear</button>

            <div style={{ marginTop: '20px' }}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                        <UserCard key={index} user={user} isActive={true}>
                            <p>status: Active</p>
                        </UserCard>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default UserSearch;