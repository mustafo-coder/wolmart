"use client";

import { Button } from "@mui/material";
import { User } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";

// Dynamic import for TinyMCE to avoid SSR issues
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function Profile() {
  const editorRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <User className="w-5 h-5" />
        <h1 className="text-2xl font-semibold">Account Details</h1>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-500"
            >
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
                focus:outline-none focus:border-black"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-500"
            >
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
                focus:outline-none focus:border-black"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="displayName"
            className="block text-sm font-medium text-gray-500"
          >
            Display name *
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            required
            defaultValue="tohirovshohruxbek"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
              focus:outline-none focus:border-black"
          />
          <p className="text-sm text-gray-500">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-500"
          >
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            defaultValue="tohirovshohruxbek@gmail.com"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
             focus:outline-none focus:border-black"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500">
            Biography
          </label>
          <Editor
            apiKey="zm33wgsb0qs4gi1zpbbgq0ewbwk993wx7qj9gtr81mgjlel3"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <h1 className="text-2xl font-semibold">Password change</h1>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm  text-gray-500">
            Current password leave blank to leave unchanged
          </label>
          <input
            type="text"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
              focus:outline-none focus:border-black"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm  text-gray-500">
            New password leave blank to leave unchanged
          </label>
          <input
            type="text"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
              focus:outline-none focus:border-black"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm  text-gray-500">
            Confirm password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm text-gray-500 shadow-sm placeholder-gray-400
              focus:outline-none focus:border-black"
          />
        </div>
        <Button className="bg-black text-white font-bold px-6 py-2 rounded-md text-center flex items-center justify-center hover:bg-gray-800 transition-all duration-300 mt-5">
          Save Changes
        </Button>
        
      </form>
    </div>
  );
}
